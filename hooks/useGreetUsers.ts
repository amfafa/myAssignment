

export const useGreetUsers = () => {
    const greetUsers = (name: string) => {
        return `Hello, ${name}!`;
    };

    return { greetUsers };
}