import { useSetRecoilState } from 'recoil'

import { RouterModuleStore } from '../../store'
import { RP } from '../../types/router'

export const useControlRouter = () => {
  const setRouterModule = useSetRecoilState(RouterModuleStore)
  function to(key: RP) {
    window.location.hash = `#/${key}`
    setRouterModule(key)
  }
  const toInstall = () => to('install')
  const toInstallGo = () => to('installGo')
  const toInstallGop = () => to('installGop')
  const toManage = () => to('manage')
  const toManageUpdate = () => to('manageUpdate')
  const toManageReinstall = () => to('manageReinstall')
  const toManageUninstall = () => to('manageUninstall')
  const toErrorNetwork = () => to('errorNet')
  const toErrorVersion = () => to('errorVersion')
  const toErrorIngop = () => to('errorIngop')
  const toTipsReboot = () => to('tipsReboot')
  const toTipsIngopGo = () => to('tipsReboot')
  return {
    toInstall,
    toInstallGo,
    toInstallGop,
    toManage,
    toManageReinstall,
    toManageUninstall,
    toManageUpdate,
    toErrorNetwork,
    toErrorVersion,
    toErrorIngop,
    toTipsReboot,
    toTipsIngopGo
  }
}
