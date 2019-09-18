#!/usr/bin/env node

import * as commander from 'commander';
import NodeFactory from '../Node/NodeFactory';
import Node from '../Node/Node';
import NodeOptions from './NodeOptions';
import GraphOptions from './GraphOptions';
import GraphDescription from '../Graph/GraphDescription';
import SubGraphDeployer from '../Graph/SubGraphDeployer';
import Graph from '../Graph/Graph';
import DevChainOptions from './DevChainOptions';

let mosaic = commander
  .arguments('<chain>');

mosaic = NodeOptions.addCliOptions(mosaic);
mosaic = GraphOptions.addCliOptions(mosaic);

mosaic
  .option('-u,--unlock <accounts>', 'a comma separated list of accounts that get unlocked in the node; you must use this together with --password')
  .option('-s,--password <file>', 'the path to the password file on your machine; you must use this together with --unlock')
  .option('-g,--withoutGraphNode', 'boolean flag which decides if graph node should be started')
  .option('-d,--debug','boolean flag determining whether chain to be started in debug mode; if not provided then chain starts with only eth api enabled for ws and rpc')
  .action((chain: string, options) => {
    let chainInput = chain;
    let optionInput = Object.assign({}, options);
    if (DevChainOptions.isDevChain(chain, options)) {
      const devParams = DevChainOptions.getDevChainParams(chain, options);
      chainInput = devParams.chain;
      optionInput = devParams.options;
    }
    const {
      mosaicDir,
      port,
      rpcPort,
      websocketPort,
      keepAfterStop,
      unlock,
      password,
      originChain,
      debug,
    } = NodeOptions.parseOptions(optionInput, chainInput);
    const node: Node = NodeFactory.create({
      chain: chainInput,
      mosaicDir,
      port,
      rpcPort,
      websocketPort,
      keepAfterStop,
      unlock,
      password,
      originChain,
      debug,
    });
    node.start();

    if (!optionInput.withoutGraphNode) {
      const graphDescription: GraphDescription = GraphOptions.parseOptions(optionInput, chainInput);
      // reuse params from node start command
      graphDescription.mosaicDir = mosaicDir;
      graphDescription.ethereumRpcPort = rpcPort;

      new Graph(graphDescription).start().then(() => {
        let subGraphDeployer;
        // options.origin passed only in case of starting an auxiliary chain
        if (optionInput.origin) {
          subGraphDeployer = new SubGraphDeployer(graphDescription, optionInput.origin, chainInput);
        } else {
          subGraphDeployer = new SubGraphDeployer(graphDescription, chainInput, null);
        }
        return subGraphDeployer.deploy();
      });
    }
  })
  .parse(process.argv);
