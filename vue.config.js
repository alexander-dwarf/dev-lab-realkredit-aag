module.exports = {
    chainWebpack: config => {
        const svgRule = config.module.rule('svg');
        svgRule.uses.clear();
        svgRule
            .use('svg-inline-loader')
            .loader('svg-inline-loader')
            .options({
                removeTags: true,
                removingTags: ['title', 'desc'],
                idPrefix: true,
                classPrefix: true,
                removeSVGTagAttrs: false,
            });
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/scss/global.scss";`,
            },
        },
    },
};
