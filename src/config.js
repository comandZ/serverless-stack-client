const config = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "app-user-upload",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://dqjvmcy351.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_p8onECUuM",
        APP_CLIENT_ID: "288jpb97tcc74adfetusllpg18",
        IDENTITY_POOL_ID: "us-east-1:8026a067-a522-491c-9422-c4d9ab5d8d54",
    },
};

export default config;