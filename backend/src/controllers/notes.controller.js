const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}

notesCtrl.createNote = async (req, res) => {
    const {title, description, author, date} = req.body;
    const newNote = new Note({
        title,
        description,
        author,
        date
    })
    await newNote.save();
    res.json({ message: 'Note Saved'});
}

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
}

notesCtrl.updateNote = async (req, res) => {
    const {title, description, author} = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title,
        description,
        author
    });
    res.json({message: 'Note Updated'});
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findOneAndDelete({_id: req.params.id});
    res.json({message: 'Note Deleted'});
}

module.exports = notesCtrl;