import StoryModel from "../models/storyModel.js"


class StoryController {
    static getStory = function() {
        console.log("get story")
    }
    
    static getStoriesByAuthor = function() { 
        console.log("get by author")
    }
    
    static getStoriesByTopic = function() { 
        console.log("get by topic")
    }
    
    static getStoriesByFollowing = function() {
        console.log("get stories by following")
    }
    
    static getSimiliarStories = function () {         // more from medium
        console.log('similiar stories')
    }
    
    static getTrendingStories = function () {
        console.log('get trending stories');
    }

    static getTrendingStoriesByTopic = function () {
        console.log('get trending stories by topic');
    }

    static getLatestStoriesByTopic = function () {
        console.log('get latest stories by topic');
    }
    
    static getBestStoriesByTopic = function () {
        console.log('get latest stories by topic');
    }
    
    static createStory = function() {
        console.log("create story")
    }

    static editStory = function() {
        console.log("get story")
    }
    
    static deleteStory = function() {
        console.log("get story")
    }

}

export default StoryController;