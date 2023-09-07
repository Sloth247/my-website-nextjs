import Skill from '@models/skill';
import { connectToDB } from '@utils/database';

export const GET = async (request) => {
  try {
    await connectToDB();

    const skills = await Skill.find({});

    return new Response(JSON.stringify(skills), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch all skills', { status: 500 });
  }
};
