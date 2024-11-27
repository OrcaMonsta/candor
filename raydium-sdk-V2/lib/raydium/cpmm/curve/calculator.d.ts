import BN__default from 'bn.js';

declare enum RoundDirection {
    Floor = 0,
    Ceiling = 1
}
declare type SwapWithoutFeesResult = {
    sourceAmountSwapped: BN__default;
    destinationAmountSwapped: BN__default;
};
declare type TradingTokenResult = {
    tokenAmount0: BN__default;
    tokenAmount1: BN__default;
};
declare type SwapResult = {
    newSwapSourceAmount: BN__default;
    newSwapDestinationAmount: BN__default;
    sourceAmountSwapped: BN__default;
    destinationAmountSwapped: BN__default;
    tradeFee: BN__default;
};
declare class CurveCalculator {
    static validate_supply(tokenAmount0: BN__default, tokenAmount1: BN__default): void;
    static swap(sourceAmount: BN__default, swapSourceAmount: BN__default, swapDestinationAmount: BN__default, tradeFeeRate: BN__default): SwapResult;
}

export { CurveCalculator, RoundDirection, SwapResult, SwapWithoutFeesResult, TradingTokenResult };
