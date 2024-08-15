import { Note as dbNote } from "./../models/index.js";

const resolvers = {
  Note: {
    id: (note) => note.id,
  },
  Query: {
    notes: async () => {
      return await dbNote.findAll();
    },
    note: async (parent, args) => {
      return await dbNote.findByPk(args.id);
    },
  },
  Mutation: {
    createNote: async (parent, args) => {
      return await dbNote.create(args);
    },
    updateNote: async (parent, args) => {
      const note = await dbNote.findByPk(args.id);
      return await note.update(args);
    },
    deleteNote: async (parent, args) => {
      const note = await dbNote.findByPk(args.id);
      return await note.destroy();
    },
  },
};

export default resolvers;
