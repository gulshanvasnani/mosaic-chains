import Logger from "../Logger";

/**
 * A genesis file for a new clique PoA chain.
 */
export default class CliqueGenesis {
  /**
   * Creates a new clique genesis frorm a template and fills in the given values.
   */
  public static create(chainId: string, sealer: string, deployer: string): any {
    const initialGenesis = {
      config: {
        chainId: CliqueGenesis.convertToInt(chainId),
        homesteadBlock: 1,
        eip150Block: 2,
        eip150Hash: '0x0000000000000000000000000000000000000000000000000000000000000000',
        eip155Block: 3,
        eip158Block: 3,
        byzantiumBlock: 4,
        // constantinopleBlock: 5,
        clique: {
          period: 3,
          epoch: 30000
        }
      },
      nonce: '0x0',
      timestamp: '0x5a71660b',
      // Sealer will be added here:
      extraData: '',
      // Decimal: 10 mio.
      gasLimit: '0x989680',
      difficulty: '0x1',
      mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
      coinbase: '0x0000000000000000000000000000000000000000',
      alloc: {
        '0000000000000000000000000000000000000000': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000001': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000002': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000003': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000004': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000005': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000006': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000007': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000008': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000009': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000000a': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000000b': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000000c': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000000d': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000000e': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000000f': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000010': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000011': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000012': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000013': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000014': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000015': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000016': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000017': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000018': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000019': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000001a': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000001b': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000001c': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000001d': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000001e': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000001f': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000020': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000021': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000022': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000023': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000024': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000025': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000026': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000027': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000028': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000029': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000002a': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000002b': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000002c': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000002d': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000002e': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000002f': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000030': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000031': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000032': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000033': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000034': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000035': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000036': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000037': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000038': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000039': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000003a': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000003b': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000003c': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000003d': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000003e': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000003f': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000040': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000041': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000042': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000043': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000044': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000045': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000046': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000047': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000048': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000049': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000004a': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000004b': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000004c': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000004d': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000004e': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000004f': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000050': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000051': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000052': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000053': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000054': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000055': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000056': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000057': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000058': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000059': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000005a': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000005b': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000005c': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000005d': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000005e': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000005f': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000060': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000061': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000062': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000063': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000064': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000065': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000066': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000067': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000068': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000069': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000006a': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000006b': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000006c': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000006d': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000006e': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000006f': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000070': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000071': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000072': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000073': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000074': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000075': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000076': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000077': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000078': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000079': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000007a': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000007b': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000007c': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000007d': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000007e': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000007f': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000080': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000081': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000082': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000083': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000084': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000085': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000086': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000087': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000088': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000089': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000008a': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000008b': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000008c': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000008d': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000008e': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000008f': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000090': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000091': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000092': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000093': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000094': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000095': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000096': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000097': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000098': {
          balance: '0x1'
        },
        '0000000000000000000000000000000000000099': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000009a': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000009b': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000009c': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000009d': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000009e': {
          balance: '0x1'
        },
        '000000000000000000000000000000000000009f': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000a0': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000a1': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000a2': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000a3': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000a4': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000a5': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000a6': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000a7': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000a8': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000a9': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000aa': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000ab': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000ac': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000ad': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000ae': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000af': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000b0': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000b1': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000b2': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000b3': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000b4': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000b5': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000b6': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000b7': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000b8': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000b9': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000ba': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000bb': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000bc': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000bd': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000be': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000bf': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000c0': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000c1': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000c2': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000c3': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000c4': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000c5': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000c6': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000c7': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000c8': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000c9': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000ca': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000cb': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000cc': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000cd': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000ce': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000cf': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000d0': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000d1': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000d2': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000d3': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000d4': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000d5': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000d6': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000d7': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000d8': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000d9': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000da': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000db': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000dc': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000dd': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000de': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000df': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000e0': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000e1': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000e2': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000e3': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000e4': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000e5': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000e6': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000e7': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000e8': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000e9': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000ea': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000eb': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000ec': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000ed': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000ee': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000ef': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000f0': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000f1': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000f2': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000f3': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000f4': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000f5': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000f6': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000f7': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000f8': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000f9': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000fa': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000fb': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000fc': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000fd': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000fe': {
          balance: '0x1'
        },
        '00000000000000000000000000000000000000ff': {
          balance: '0x1'
        },
      },
      number: '0x0',
      gasUsed: '0x0',
      parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
    }

    // Remove leading `0x` as it should not be present in the genesis addresses.
    deployer = CliqueGenesis.removeLeading0x(deployer);
    sealer = CliqueGenesis.removeLeading0x(sealer);

    initialGenesis.alloc[deployer] = { balance: '0x295be96e640669720000000' };
    initialGenesis.extraData = this.generateSealerExtraData(sealer);

    return initialGenesis;
  }

  /**
   * Converts the sealer to a string that is required in the extra data.
   */
  private static generateSealerExtraData(sealer: string): string {
    return `0x0000000000000000000000000000000000000000000000000000000000000000${sealer}0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`;
  }

  /**
   * Convert a given string to a number. Always radix 10.
   */
  private static convertToInt(input: string): number {
    const output = parseInt(input, 10);

    if (output === NaN) {
      Logger.error('could not convert chain id to integer', { input });
      throw new Error();
    }

    return output;
  }

  /**
   * Removes the optional leading `0x` of a given string.
   */
  private static removeLeading0x(input: string): string {
    if (input.substring(0, 2) === '0x') {
      input = input.substring(2);
    }

    return input;
  }
}


