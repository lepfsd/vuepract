import Service from './Service';

const resource = 'posts';

export default {
    get() {
        return Service.get(resource)
    }
};

