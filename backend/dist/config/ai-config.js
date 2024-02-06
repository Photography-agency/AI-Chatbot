import { Configuration } from "openai";
export const configureAi = () => {
    const config = new Configuration({
        apiKey: process.env.OPEN_AI_SECRET,
        organization: process.env.OPENAI_ORGANIZATION_ID
    });
};
//# sourceMappingURL=ai-config.js.map