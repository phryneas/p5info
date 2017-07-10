import {personaMap, PersonaData, skillMap, SkillData} from '../persona5_calculator';

type PersonaStatIndex = "strength" | "magic" | "endurance" | "agility" | "luck";
type PersonaResistanceIndex = "physical" | "gun" | "fire" | "ice" | "electric" | "wind" | "psychic" | "nuclear" | "bless" | "curse";


function getPersona(name: string): PersonaData {
    let persona = personaMap[name];
    return {
        name,
        // Stats
        strength: persona.stats[0],
        magic: persona.stats[1],
        endurance: persona.stats[2],
        agility: persona.stats[3],
        luck: persona.stats[4],
        // Resistances
        physical: persona.elems[0],
        gun: persona.elems[1],
        fire: persona.elems[2],
        ice: persona.elems[3],
        electric: persona.elems[4],
        wind: persona.elems[5],
        psychic: persona.elems[6],
        nuclear: persona.elems[7],
        bless: persona.elems[8],
        curse: persona.elems[9],
        ...persona,
    };
}

function getSkill(name: string): SkillData {
    return {
        name,
        ...skillMap[name]
    }
}

type StringMap<T> = { [key: string]: T };
type PersonaMap = StringMap<PersonaData>;
type SkillMap = StringMap<SkillData>;

const allPersona: PersonaMap =
    Object.keys(personaMap).reduce((combined: PersonaMap, name: string) => {
        combined[name] = getPersona(name);
        return combined;
    }, {});

const allSkills: SkillMap =
    Object.keys(skillMap).reduce((combined: SkillMap, name: string) => {
        combined[name] = getSkill(name);
        return combined;
    }, {});

export {PersonaData, SkillData, PersonaMap, SkillMap, allPersona, allSkills, StringMap, PersonaStatIndex, PersonaResistanceIndex};