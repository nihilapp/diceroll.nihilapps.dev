// 이 폴더에서는 데이터만을 다룬다. 데이터의 타이핑이나 데이터 그 자체를 여기에 넣어둔다. prisma 등등.

export {
  type ApiResponse,
  type IConfigData,
  type ISiteMeta
} from './common/common.types';

export {
  commonStore,
  setDarkMode,
  toggleSideOpen,
  setSideOpen
} from './common/common.store';

export {
  diceStore,
  setFormulaString,
  addRollResult,
  resetRollResult,
  setRollType
} from './dice/dice.store';
