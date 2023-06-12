

const Io = require("../utils/io");
const Forms = new Io("./database/forms.json");
const Teachers = new Io("./database/teachers.json");

const forms = async (req, res) => {
    const teachers = await Teachers.read();
    res.render("forms", teachers,)

};



module.exports = {
  forms,
};
