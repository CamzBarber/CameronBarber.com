import docx
import json
import pyperclip

# Concatenate role/company for keys below.
# Order: URL, img, skills list
# Read bullet points to check for skills.

extra_info = {
    "IT Associate [Placement]PwC": [
        "http://www.pwc.com/",
        "img/experience/pwc.jpeg",
        ["Python", "HTML5", "CSS3", "Bootstrap", "JavaScript", "JSON", "Chrome Extensions", "APIs", "Postman", "Reverse Engineering", "Google Analytics", "Alteryx", "NLP", "Internet of Things", "Microsoft Azure", "Teaching", "Parallel Programming", "Firebase", "Electronics", "Agile"]
    ],
    "Freelance Technology Support": [
        "",
        "img/experience/freelance.png",
        ["Python", "JSON", "Microsoft Excel"]
    ],
    "Camp CounsellorAmeriCamp": [
        "https://www.americamp.co.uk",
        "img/experience/americamp.png",
        []
    ],
    "Technical AssistantNTSU": [
        "https://www.trentstudents.org",
        "img/experience/ntsu.jpg",
        ["Electronics"]
    ],
    "Recruitment InternDriver Hire": [
        "https://www.driverhire.co.uk/office/grimsby-scunthorpe/",
        "img/experience/driverhire.png",
        ["HTML5", "CSS3", "Teaching", "Microsoft Excel", "Visual Basic"]
    ],
    "Student MemberInstitute of Directors": [
        "https://www.iod.com",
        "img/experience/iod.jpg",
        []
    ],
    "National Award WinnerCareer Ready": [
        "https://www.careerready.org.uk",
        "img/experience/careerready.png",
        []
    ],
}

doc = docx.Document('CV.docx')
tables = doc.tables


def get_style(para):
    b = False
    c = None
    for run in para.runs:
        if run.bold:
            b = True
        if run.font.color.rgb:
            c = run.font.color.rgb
    return b, c


def append_da(ty, da):
    if da["role"] + da["company"] in extra_info:
        it = extra_info[da["role"] + da["company"]]
        da["href"] = it[0]
        da["icon"] = it[1]
        da["skills"] = it[2]
    else:
        print("ERROR:", da["role"], da["company"], "has no extra_info.")
    data[ty].append(da)


# Creating json
data = {}


def json_cv(ty, num):
    current_sub = 0
    data[ty] = []

    da = None

    # Experience: Table 2 (variable), Row 0, Cell 1 (cell 0 is the title)
    for paragraph in tables[num].rows[0].cells[1].paragraphs:
        # print("#")
        bold, colour = get_style(paragraph)
        # print('style below', bold)
        # print(str(colour))
        p = paragraph.text.strip()
        if p:
            if bold and colour is None:  # is a main title
                left_dates = p.split("  ", 1)
                left = left_dates[0].split(' at ', 1)
                role = left[0].strip()
                if len(left) == 2:
                    work = left[1].strip()
                else:
                    work = ""
                    print("ERROR:", role, "has no place of work.")
                dates = left_dates[1].strip()

                # print("# Title:", role, work, dates)
                if da is not None:  # stops it adding the first time it runs
                    append_da(ty, da)

                da = {"role": role,
                      "company": work,
                      "href": "",
                      "icon": "",
                      "dates": dates,
                      "skills": [],
                      "detail": []
                      }
                current_sub = 0

            elif bold and str(colour) == "767171":  # is a sub-title
                # print("\t# Sub-Title:" + '"' + p + '"')
                current_sub = len(da['detail'])
                da['detail'].append([p, []])
            elif not bold:  # is a bullet
                # if no current details need to create
                if len(da['detail']) == 0:
                    da['detail'].append(["", []])
                # print("\t\t*" + '"' + p + '"')
                da['detail'][current_sub][1].append(p)

    append_da(ty, da) # appends last experience job entry as loop doesn't get to it


json_cv('work', 2)
json_cv('achievements', 3)

json_data = json.dumps(data, indent=4)
#print(json_data)
print("\nThe JSON has been copied to your clipboard.")
pyperclip.copy(json_data)
