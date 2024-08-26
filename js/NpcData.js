/**
 * Data Format
 * <npc_name>: {
 *      name: <npc_name>,
 *      img: </path/to/img.png>,
 *      map: MAP_DATA,
 *      miniMap: MINIMAP_DATA,
 * }
 */
const NPC_BASE_PATH = 'src/NPC';
const NPC_DATA = {
    Arec: {
        name: 'Arec',
        img: NPC_BASE_PATH+'/ElnathMts/Arec.png',
        map: MAP_DATA['ElNath'],
        miniMap: MINIMAP_DATA['ChiefsResidence'],
    },
    ChiefTatamo: {
        name: 'ChiefTatamo',
        img: NPC_BASE_PATH+'/MinarForest/ChiefTatamo.png',
        map: MAP_DATA['Leafre'],
    },
    Gritto: {
        name: 'Gritto',
        img: NPC_BASE_PATH+'/MinarForest/Gritto.png',
        map: MAP_DATA['ValleyOfTheAntelope'],
        miniMap: MINIMAP_DATA['ForestOfThePriest'],
    },
    Harmonia: {
        name: 'Harmonia',
        img: NPC_BASE_PATH+'/MinarForest/Harmonia.png',
        map: MAP_DATA['ValleyOfTheAntelope'],
        miniMap: MINIMAP_DATA['ForestOfThePriest'],
    },
    Hellin: {
        name: 'Hellin',
        img: NPC_BASE_PATH+'/MinarForest/Hellin.png',
        map: MAP_DATA['ValleyOfTheAntelope'],
        miniMap: MINIMAP_DATA['ForestOfThePriest'],
    },
    Legor: {
        name: 'Legor',
        img: NPC_BASE_PATH+'/MinarForest/Legor.png',
        map: MAP_DATA['ValleyOfTheAntelope'],
        miniMap: MINIMAP_DATA['ForestOfThePriest'],
    },
    Pedro: {
        name: 'Pedro',
        img: NPC_BASE_PATH+'/ElnathMts/Pedro.png',
        map: MAP_DATA['ElNath'],
        miniMap: MINIMAP_DATA['ChiefsResidence'],
    },
    Rene: {
        name: 'Rene',
        img: NPC_BASE_PATH+'/ElnathMts/Rene.png',
        map: MAP_DATA['ElNath'],
        miniMap: MINIMAP_DATA['ChiefsResidence'],
    },
    Robeira: {
        name: 'Robeira',
        img: NPC_BASE_PATH+'/ElnathMts/Robeira.png',
        map: MAP_DATA['ElNath'],
        miniMap: MINIMAP_DATA['ChiefsResidence'],
    },
    Samuel: {
        name: 'Samuel',
        img: NPC_BASE_PATH+'/MinarForest/Samuel.png',
        map: MAP_DATA['ValleyOfTheAntelope'],
        miniMap: MINIMAP_DATA['ForestOfThePriest'],
    },
    Tylus: {
        name: 'Tylus',
        img: NPC_BASE_PATH+'/ElnathMts/Tylus.png',
        map: MAP_DATA['ElNath'],
        miniMap: MINIMAP_DATA['ChiefsResidence'],
    },
    Vega: {
        name: 'Vega',
        img: NPC_BASE_PATH+'/LudusLake/Vega.png',
        map: MAP_DATA['EosTower4155Floor'],
    },
};
