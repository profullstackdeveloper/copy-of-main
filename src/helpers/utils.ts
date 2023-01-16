export const getButtonWidth = (content: string): string | undefined => {
    if(content.length === 5) {
        return '97px';
    }
    if(content.length === 8) {
        return '106px';
    }
    if(content.length === 10) {
        return '123px';
    }
    if(content.length === 14) {
        return '133px';
    }
    if(content.length === 25) {
        return '213px';
    }
    if(content.length === 9) {
        return '106px';
    }
}