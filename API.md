# APIs

## Fetch User ID
https://www.coursera.org/api/myAdmins.v1/?fields=partners

## Fetch Course Name+ID

### On-Demand
https://www.coursera.org/api/onDemandSpecializationMemberships.v1?fields=completionStatus,role,s12nId,status,onDemandSpecializations.v1(courseIds,interchangeableCourseIds,logo,name,partnerIds,slug),partners.v1(capstone,homeLink,name),courses.v1(courseProgress,courseStatus,instructorIds,membershipIds,name,startDate,v2Details,vcMembershipId,vcMembershipIds),instructors.v1(name),vcMemberships.v1(certificateCodeWithGrade),memberships.v1(grade),v2Details.v1(onDemandSessions,plannedLaunchDate)&includes=s12nId,onDemandSpecializations.v1(courseIds,interchangeableCourseIds,partnerIds),courses.v1(courseProgress,instructorIds,membershipIds,v2Details,vcMembershipIds),v2Details.v1(onDemandSessions)&q=me

## Fetch Next Item ID
https://www.coursera.org/api/opencourse.v1/user/{user_id}/course/{course_name}

## Fetch Module ID
https://www.coursera.org/api/onDemandCourseMaterials.v2/{course_id}/?fields=onDemandCourseMaterialItems.v2(lockableByItem%2CisLocked)&includes=items&showLockedItems=true

## Fetch Deadline
https://www.coursera.org/api/onDemandSessionMemberships.v1/?q=activeByUserAndCourse&userId={user_id}&courseId={course_id}&includes=sessions&fields=onDemandSessions.v1(moduleDeadlines)

## Fetch Assignment Type (todo)
https://www.coursera.org/api/opencourse.v1/course/{course_name}