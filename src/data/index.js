import dataProfiles from './profiles'
import dataColours from './colours'
import dataBuildings from './buildings'

const initialState = { profile: {profiles: dataProfiles, default: 'ar-series'},
                       colour: {colours: dataColours, default: 'jet-black'},
                       building: {buildings: dataBuildings, default: 'thb-cottage'}
                     }
export default initialState
