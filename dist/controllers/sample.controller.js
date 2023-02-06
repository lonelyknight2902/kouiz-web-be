import sampleModel from "../models/sample.model";
export const SampleController = {
    getSample: () => {
        return 'hi';
    },
    createSample: (x, y) => {
        sampleModel.create({ x, y }, (err) => {
            if (err) {
                throw err;
            }
            else {
                return true;
            }
        });
        return;
    },
    deleteSample: (x) => {
        sampleModel.deleteOne({ x }, (err) => {
            if (err) {
                throw err;
            }
            else {
                return true;
            }
        });
    },
};
