var i=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var n=Object.getOwnPropertyNames;var d=Object.prototype.hasOwnProperty;var p=(t,m)=>{for(var e in m)i(t,e,{get:m[e],enumerable:!0})},l=(t,m,e,r)=>{if(m&&typeof m=="object"||typeof m=="function")for(let a of n(m))!d.call(t,a)&&a!==e&&i(t,a,{get:()=>m[a],enumerable:!(r=C(m,a))||r.enumerable});return t};var A=t=>l(i({},"__esModule",{value:!0}),t);var u={};p(u,{InstructionType:()=>V,TxVersion:()=>o});module.exports=A(u);var o=(e=>(e[e.V0=0]="V0",e[e.LEGACY=1]="LEGACY",e))(o||{}),V={CreateAccount:"CreateAccount",InitAccount:"InitAccount",CreateATA:"CreateATA",CloseAccount:"CloseAccount",TransferAmount:"TransferAmount",InitMint:"InitMint",MintTo:"MintTo",InitMarket:"InitMarket",Util1216OwnerClaim:"Util1216OwnerClaim",SetComputeUnitPrice:"SetComputeUnitPrice",SetComputeUnitLimit:"SetComputeUnitLimit",ClmmCreatePool:"ClmmCreatePool",ClmmOpenPosition:"ClmmOpenPosition",ClmmIncreasePosition:"ClmmIncreasePosition",ClmmDecreasePosition:"ClmmDecreasePosition",ClmmClosePosition:"ClmmClosePosition",ClmmSwapBaseIn:"ClmmSwapBaseIn",ClmmSwapBaseOut:"ClmmSwapBaseOut",ClmmInitReward:"ClmmInitReward",ClmmSetReward:"ClmmSetReward",ClmmCollectReward:"ClmmCollectReward",AmmV4Swap:"AmmV4Swap",AmmV4AddLiquidity:"AmmV4AddLiquidity",AmmV4RemoveLiquidity:"AmmV4RemoveLiquidity",AmmV4SimulatePoolInfo:"AmmV4SimulatePoolInfo",AmmV4SwapBaseIn:"AmmV4SwapBaseIn",AmmV4SwapBaseOut:"AmmV4SwapBaseOut",AmmV4CreatePool:"AmmV4CreatePool",AmmV4InitPool:"AmmV4InitPool",AmmV5AddLiquidity:"AmmV5AddLiquidity",AmmV5RemoveLiquidity:"AmmV5RemoveLiquidity",AmmV5SimulatePoolInfo:"AmmV5SimulatePoolInfo",AmmV5SwapBaseIn:"AmmV5SwapBaseIn",AmmV5SwapBaseOut:"AmmV5SwapBaseOut",RouteSwap:"RouteSwap",RouteSwap1:"RouteSwap1",RouteSwap2:"RouteSwap2",FarmV3Deposit:"FarmV3Deposit",FarmV3Withdraw:"FarmV3Withdraw",FarmV3CreateLedger:"FarmV3CreateLedger",FarmV5Deposit:"FarmV5Deposit",FarmV5Withdraw:"FarmV5Withdraw",FarmV5CreateLedger:"FarmV5CreateLedger",FarmV6Deposit:"FarmV6Deposit",FarmV6Withdraw:"FarmV6Withdraw",FarmV6Create:"FarmV6Create",FarmV6Restart:"FarmV6Restart",FarmV6CreatorAddReward:"FarmV6CreatorAddReward",FarmV6CreatorWithdraw:"FarmV6CreatorWithdraw",CpmmCreatePool:"CpmmCreatePool",CpmmAddLiquidity:"CpmmAddLiquidity",CpmmWithdrawLiquidity:"CpmmWithdrawLiquidity",CpmmSwapBaseIn:"CpmmSwapBaseIn",CpmmSwapBaseOut:"CpmmSwapBaseOut"};0&&(module.exports={InstructionType,TxVersion});
//# sourceMappingURL=txType.js.map