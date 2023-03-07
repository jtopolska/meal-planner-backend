const mealSchema = require('./MealModel');

module.exports.getMeals = async (req, res) => {
    const allMeal = await mealSchema.find();
    res.send(allMeal);
}

module.exports.postMeal = async (req, res) => {
    const { title } = req.body;
    mealSchema.create({ title })
    .then((meal) => res.send(meal));
}

module.exports.editMeal = async (req, res) => {
    const { _id, title } = req.body;
    mealSchema.findByIdAndUpdate(_id, { title })
    .then(() => res.send('Meal edited'));
}

module.exports.deleteMeal = async (req, res) => {
    const { _id } = req.body;
    mealSchema.findByIdAndDelete(_id)
    .then(() => res.send('Meal deleted'));
}