import Character from './Character';

export default function IceWizard(){
    return Object.assign({}, new Character('ice-wizard'), {
        name: 'Ice Wizard' 
    });
}