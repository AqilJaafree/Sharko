import SwapFactory from 0x6ca93d49c45a249f

pub fun main(): [AnyStruct] {
  let len = SwapFactory.getAllPairsLength()
  if (len == 0) {
    return []
  } else {
    return SwapFactory.getSlicedPairInfos(from: 0, to: UInt64.max)
  }
}