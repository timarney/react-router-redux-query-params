import dataProfiles from './profiles'
import dataColours from './colours'
import dataBuildings from './buildings'

const initialState = { profile: {profiles: dataProfiles, default: 'pone'},
                       colour: {colours: dataColours, default: 'red'},
                       building: {buildings: dataBuildings, default: 'bred'}
                     }
export default initialState
