"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { IconBell, IconSearch, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const dummyQuestions = [
  {
    id: 1,
    title: "Is it good things to use AI for hackathon?",
    author: "odoo 10 pvt. ltd.",
    replies: 21,
    category: "Technical",
    status: "AI",
    rating: 4
  },
  {
    id: 2,
    title: "Is it good things to use AI for hackathon?",
    author: "odoo 10 pvt. ltd.",
    replies: 21,
    category: "Technical",
    status: "AI",
    rating: 5
  },
  {
    id: 3,
    title: "Is it good things to use AI for hackathon?",
    author: "odoo 10 pvt. ltd.",
    replies: 21,
    category: "Technical", 
    status: "AI",
    rating: 3
  }
];

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-gray-400">By default On</div>
          <div className="flex items-center gap-4">
            <IconBell className="h-5 w-5 text-gray-400" />
            <Button variant="outline" className="text-white border-gray-600">
              Dashboard
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Admin
            </Button>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-gray-900 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <Checkbox id="open-only" />
            <label htmlFor="open-only" className="text-white text-sm">
              Show open only
            </label>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-40 bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="Categories" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="technical">Technical</SelectItem>
                <SelectItem value="general">General</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-32 bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Sort by:</span>
              <div className="flex gap-1">
                <Checkbox id="recent" />
                <label htmlFor="recent" className="text-gray-400">Most recent</label>
              </div>
              <div className="flex gap-1">
                <Checkbox id="upvoted" />
                <label htmlFor="upvoted" className="text-gray-400">Most upvoted</label>
              </div>
            </div>

            <div className="ml-auto text-green-400 text-sm">
              Add appropriate filter & search
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Input
              type="text"
              placeholder="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 border-gray-600 text-white pl-4 pr-12"
            />
            <IconSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white px-4 py-1 text-sm">
              Ask
            </Button>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4 mb-6">
          {dummyQuestions.map((question) => (
            <CardSpotlight key={question.id} className="bg-gray-900 p-4 rounded-lg">
              <div className="flex items-start gap-4">
                {/* Vote Section */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-white text-sm font-bold">
                    {question.rating}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-green-600 text-white">
                      {question.category}
                    </Badge>
                    <Badge variant="outline" className="border-blue-500 text-blue-400">
                      {question.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-white font-medium mb-2">
                    {question.title}
                  </h3>
                  
                  <div className="text-sm text-gray-400">
                    Posted by {question.author}
                  </div>
                </div>

                {/* Replies Count */}
                <div className="flex flex-col items-center">
                  <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium">
                    {question.replies}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Number of conversation
                  </div>
                </div>
              </div>
            </CardSpotlight>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          <Button variant="ghost" size="sm" className="text-gray-400">
            <IconChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant={currentPage === 1 ? "default" : "ghost"}
            size="sm"
            className={currentPage === 1 ? "bg-gray-700 text-white" : "text-gray-400"}
          >
            1
          </Button>
          
          <Button variant="ghost" size="sm" className="text-gray-400">
            2
          </Button>
          
          <Button variant="ghost" size="sm" className="text-gray-400">
            3
          </Button>
          
          <Button variant="ghost" size="sm" className="text-gray-400">
            4
          </Button>
          
          <span className="text-gray-400">...</span>
          
          <Button variant="ghost" size="sm" className="text-gray-400">
            31
          </Button>
          
          <Button variant="ghost" size="sm" className="text-gray-400">
            <IconChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Bottom Note */}
        <div className="text-center text-sm text-gray-400 mt-6">
          Owner can close the question if he/she get satisfied answer.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
