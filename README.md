# Status: Failure

React Native with NPM as npmClient in monorepo is hard to configure,
Hard to track styles in nativewind
process(cb).then(() => <RenderPage />)

TOTEST:
Move some dependencies from root_dir to React-Native's node_modules and test if it will resolve metro.config conflict with nativewind:

Issue: metro.config.js imports node_modules from root_dir as async functions
