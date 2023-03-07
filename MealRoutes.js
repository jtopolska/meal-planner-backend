const { Router } = require('express');
const router = Router();
const { getMeals, postMeal, editMeal, deleteMeal } = require('./MealController');

router.get('/', getMeals);
router.post('/postMeal', postMeal);
router.put('/editMeal', editMeal);
router.post('/deleteMeal', deleteMeal);

module.exports = router;