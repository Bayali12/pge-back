import { Schema, model } from 'mongoose';

const incidentSchema = new Schema(
  {
    importance: {
      type: String,
      required: true,
    },
    equipment: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    responsible: {
      type: String,
      required: true,
    },
    isRead: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        ret.id = ret._id; // Создание виртуального поля `id` на основе `_id` и присвоение ему значения
        delete ret._id; // Удаление `_id`
      },
    },
  },
);

export default model('Incident', incidentSchema);
