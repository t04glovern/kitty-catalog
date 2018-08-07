const dev = {
    STRIPE_KEY: "pk_test_cABrU3VpdyzSjYek4aeiIZYU",
    s3: {
        REGION: "ap-southeast-2",
        BUCKET: "kitty-catalog-serverless-serverlessdeploymentbuck-1pwd8tdn0ergb"
    },
    apiGateway: {
        REGION: "ap-southeast-2",
        URL: "https://ty5evdwca9.execute-api.ap-southeast-2.amazonaws.com/dev"
    },
    cognito: {
        REGION: "ap-southeast-2",
        USER_POOL_ID: "ap-southeast-2_sZQNuihT1",
        APP_CLIENT_ID: "eokuofacf4vbd7o32o851h42k",
        IDENTITY_POOL_ID: "ap-southeast-2:d4675261-4186-4712-952c-aa2c3e2c23aa"
    }
};

const prod = {
    STRIPE_KEY: "pk_test_cABrU3VpdyzSjYek4aeiIZYU",
    s3: {
        REGION: "ap-southeast-2",
        BUCKET: "kitty-catalog-serverless-serverlessdeploymentbuck-7nyn2y7b9846"
    },
    apiGateway: {
        REGION: "ap-southeast-2",
        URL: "https://k41zlzxlb3.execute-api.ap-southeast-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "ap-southeast-2",
        USER_POOL_ID: "ap-southeast-2_xmPHCfR4Z",
        APP_CLIENT_ID: "565bd1n92vt0ncl96eu9jajm15",
        IDENTITY_POOL_ID: "ap-southeast-2:b7b2e1be-a4b5-483e-b1ed-502e11df8cc4"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ?
    prod :
    dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};
