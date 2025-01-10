export const compare = async (
    plainPassword: string,
    encryptedPassword: string
): Promise<boolean> => {
    const hashedPassword = await hash(plainPassword);
    return hashedPassword === encryptedPassword;
};