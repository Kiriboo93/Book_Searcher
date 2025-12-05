export { };
module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts',
        '!**/vendor/**'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    transform: {
        ".(ts|tsx)": "ts-jest"
    },
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy'
    },
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/coverage",
        "package.json",
        "package-lock.json",
        "jest.setup.ts",
        "jest.config.ts",
        "index.tsx"
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};