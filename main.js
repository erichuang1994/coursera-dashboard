
var httpGet = function(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
};

var fetchUserId = function() {
    var url = "https://www.coursera.org/api/myAdmins.v1/?fields=partners"
    var resp = httpGet(url);
    // todo
};

var fetchEnrollments = function() {
    var url = "https://api.coursera.org/api/users/v1/me/enrollments";
    var resp = httpGet(url);
    var data = JSON.parse(resp);
    // todo
}

var fetchNextItem = function(user_id, course_name) {
    var url = "https://www.coursera.org/api/opencourse.v1/user/" + user_id + "/course/" + course_name;
    var resp = httpGet(url);
    var data = JSON.parse(resp);
    return data['nextItem'];
};

var fetchItemInfo = function(course_id, item_id) {
    var url = "https://www.coursera.org/api/onDemandCourseMaterials.v2/" + course_id + "/?fields=onDemandCourseMaterialItems.v2(lockableByItem%2CisLocked)&includes=items&showLockedItems=true"
    var resp = httpGet(url);
    var data = JSON.parse(resp)['linked']['onDemandCourseMaterialItems.v2'];
    for (var i = 0; i < data.length; ++ i) {
        if (data[i]['id'] == item_id) {
            return data[i];
        }
    }
};

var fetchDeadline = function(user_id, course_id, module_id) {
    var url = "https://www.coursera.org/api/onDemandSessionMemberships.v1/?q=activeByUserAndCourse&userId=" + user_id + "&courseId=" + course_id + "&includes=sessions&fields=onDemandSessions.v1(moduleDeadlines)"
    var resp = httpGet(url);
    var data = JSON.parse(resp)['linked']['onDemandSessions.v1'][0]['moduleDeadlines'];
    for (var i = 0; i < data.length; ++ i) {
        if (data[i]['id'] == module_id) {
            var ddl = new Date(data[i]['deadline']);
            return ddl.toLocaleDateString();
        }
    }
};

var fetchRecentDeadlines = function(course_list, user_id) {
    for (var i = 0; i < course_list.length; ++ i) {
        var course_id = course_list[i]['course_id'];
        var course_name = course_list[i]['course_name'];
        var next_item_id = fetchNextItem(user_id, course_name);
        var next_item_info = fetchItemInfo(course_id, item_id);
        var next_item_ddl = fetchDeadline(user_id, course_id, next_item_info['moduleId']);
        // todo: put info above into some data structure
    }
};

var integrateInfo = function() {
    
};