import React from 'react'
import Back from '../common/back/Back'
import CourseCard from './CourseCard'
import OnlineCourse from './OnlineCourse'

const CourseHome = () => {
  return (
    <>
        <Back title="Explore Courses"/>
        <CourseCard />
        <OnlineCourse/>
    </>
  )
}

export default CourseHome
