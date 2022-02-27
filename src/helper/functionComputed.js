export const allUrlFunction = Object.freeze({
    video: function (name){
        const template = '';
        return template + name;
    },
    image: function (name){
        const template = '';
        return template + name;
    },
    audio: function (name){
        const template = '';
        return template + name;
    },
    url: function (id){
        const template = `https://cdn.thinglink.me/api/nubbin/${id}/plain`;
        return template;
    }
})