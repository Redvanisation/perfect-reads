import * as bcrypt from 'bcrypt';

export const hashUserPassword = async (password: string): Promise<string> => {
  const saltOrRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltOrRounds);
  return hashedPassword;
};
