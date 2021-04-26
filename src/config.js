const dev = {
    STRIPE_KEY: "pk_test_51IZHZTH9exe5fPMXqM8BOvl0yLVwIMuwn22NLBo5BwtsM0LAsNIfptiAHfWSPcgedpZs4Wfj0JM0hj4kSgGNg8jt00nVyRpQQr",
    s3: {
        REGION: "us-east-1",
        BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-v4gxsv1h3wq3",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://41h8so2cr4.execute-api.us-east-1.amazonaws.com/dev",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_UeMLT9z25",
        APP_CLIENT_ID: "1k1umun6nij8f82682od6cfhb1",
        IDENTITY_POOL_ID: "us-east-1:10374e8e-4c0f-49ba-b6a1-07f55a6457e2",
    }
};

const prod = {
    STRIPE_KEY: "pk_test_51IZHZTH9exe5fPMXqM8BOvl0yLVwIMuwn22NLBo5BwtsM0LAsNIfptiAHfWSPcgedpZs4Wfj0JM0hj4kSgGNg8jt00nVyRpQQr",
    s3: {
        REGION: "us-east-1",
        BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-jtb3mul0yw6b",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://dqjvmcy351.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_To2E4frVQ",
        APP_CLIENT_ID: "736f8af38f7r9mh0mc869t7goh",
        IDENTITY_POOL_ID: "us-east-1:60541632-e871-401a-8124-36c784dcd0b6",
    }
};

const config = {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    // Default to dev if not set
    ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;