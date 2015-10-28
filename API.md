# Workflow

## Fetch User ID and Course Name+ID

## Fetch Next Item ID
https://www.coursera.org/api/opencourse.v1/user/2795938/course/hadoop

## Fetch Module ID
https://www.coursera.org/api/onDemandCourseMaterials.v2/3j8WjTxDEeW0tw4knrMo3Q/?fields=onDemandCourseMaterialItems.v2(lockableByItem%2CisLocked)&includes=items&showLockedItems=true

## Fetch Deadline
https://www.coursera.org/api/onDemandSessionMemberships.v1/?q=activeByUserAndCourse&userId=2795938&courseId=3j8WjTxDEeW0tw4knrMo3Q&includes=sessions&fields=onDemandSessions.v1(moduleDeadlines)

## Fetch Assignment Type (todo)
https://www.coursera.org/api/opencourse.v1/course/hadoop