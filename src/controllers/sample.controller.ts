import { Request, Response } from 'express';

import sampleModel from "../models/sample.model";

export const SampleController = {
  getSample: () => {
    return 'hi'
  },

  createSample: (x: String, y: Number) => {
    sampleModel.create({ x, y }, (err) => {
      if (err) {
        throw err
      } else {
        return true
      }
    });
    return;
  },

  deleteSample: (x: String) => {
    sampleModel.deleteOne({ x }, (err) => {
      if (err) {
        throw err
      } else {
        return true
      }
    });
  },
};