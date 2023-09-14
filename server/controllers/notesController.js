const Note = require("../models/note");

const fetchNotes = async (req, res) => {
    try{
    //find notes
    const notes = await Note.find({ user: req.user._id });
    //retrieve them
    res.json({ notes });
    } catch(err) {
        console.log(err)
        res.sendStatus(400)
    }
};

const fetchNote = async (req, res) => {
    try{
    //find note with specified id
    const noteId = req.params.id;
    const note = await Note.findOne({_id: noteId, user: req.user._id });

    //retrieve it
    res.json({ note })
    } catch(err) {
        console.log(err)
        res.sendStatus(400)
    }
};

const createNote = async (req,res) => {
    try{
    //get data
    const { title, body } = req.body;

    //create note with data
    const note = await Note.create({
        title,
        body,
        user: req.user._id,
    });
    //respond with new note
    res.json({ note });
} catch(err) {
    console.log(err)
    res.sendStatus(400)
}
};

const updateNote = async (req, res) => {
    try{
    //update note with specified id
    const noteId = req.params.id;
    const { title, body } = req.body;

    await Note.findOneAndUpdate({_id: noteId, user: req.user._id}, {
        title,
        body,
    });
    //retrieve that note. find it again first
    const note = await Note.findById(noteId);
    res.json({ note });
} catch(err) {
    console.log(err)
    res.sendStatus(400)
}
};

const deleteNote = async (req, res) => {
    try{
    //find and delete note
    const noteId = req.params.id;
    await Note.deleteOne({ _id: noteId, user: req.user._id });

    //respond
    res.json({ success: "record was deleted"});
    } catch(err) {
        console.log(err)
        res.sendStatus(400)
    }
};

module.exports = {
    fetchNotes,
    fetchNote,
    createNote,
    updateNote,
    deleteNote,
}