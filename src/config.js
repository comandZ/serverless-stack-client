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
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51IZHZTH9exe5fPMXqM8BOvl0yLVwIMuwn22NLBo5BwtsM0LAsNIfptiAHfWSPcgedpZs4Wfj0JM0hj4kSgGNg8jt00nVyRpQQr",
};

export default config;