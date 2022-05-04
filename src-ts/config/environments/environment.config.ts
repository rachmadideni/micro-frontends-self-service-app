import { GlobalConfig } from '../../lib'

import { AppHostEnvironment } from './app-host-environment.enum'
import { EnvironmentConfigBsouza } from './environment.bsouza.config'
import { EnvironmentConfigDefault } from './environment.default.config'
import { EnvironmentConfigDev } from './environment.dev.config'
import { EnvironmentConfigProd } from './environment.prod.config'

function getEnvironmentConfig(): GlobalConfig {

    console.debug(process.env)

    // switch (process.env.REACT_APP_HOST_ENV) {
    // TODO: allow the use of a separate
    // process var (REACT_APP_HOST_ENV)
    // so that we can have more than just local/dev/prod
    switch (process.env.APPENV) {

        case AppHostEnvironment.bsouza:
            return EnvironmentConfigBsouza

        case AppHostEnvironment.default:
            return EnvironmentConfigDefault

        case AppHostEnvironment.dev:
            return EnvironmentConfigDev

        case AppHostEnvironment.prod:
            return EnvironmentConfigProd

        default:
            return EnvironmentConfigDefault
    }
}

const enviromentConfig: GlobalConfig = {
    ...getEnvironmentConfig(),
}

export default enviromentConfig
