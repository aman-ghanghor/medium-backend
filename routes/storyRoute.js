import express from "express"
const router = express.Router();

import StoryController from "../controllers/storyController.js";


router.get('/', StoryController.getStory);
router.post('/', StoryController.createStory);
router.put('/', StoryController.editStory);
router.delete('/', StoryController.deleteStory);


export default router;