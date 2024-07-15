import Skill from '../models/skill.model.js';

export const getSkill = async (req, res) => {
  const skill = await Skill.find();

  res.json({ status: 'success', data: skill });
};

export const addSkill = async (req, res) => {
  const skill = await Skill.create(req.body);

  res.json({ status: 'success', data: skill });
};
