const mediaQueries = {
    up() {},
    down(size) {
        const sizes = {
            xs: '575.98px',
            sm: '767.98px',
            md: '1199.98px',
            lg: '1399.98px',
            xl: '1599.98px',
        };
        return `@media (max-width: ${sizes[size]})`;
    },
};

export default mediaQueries;
