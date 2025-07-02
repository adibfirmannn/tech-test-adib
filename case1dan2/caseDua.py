comments = [
    {
        "commentId": 1,
        "commentContent": "Hai",
        "replies": [
            {
                "commentId": 11,
                "commentContent": "Hai Juga",
                "replies": [
                    {
                        "commentId": 111,
                        "commentContent": 'Haai juga hai jugaa'
                    },
                    {
                        "commentId": 112,
                        "commentContent": 'Haai juga hai jugaa'
                    }
                ]
            },
            {
                "commentId": 12,
                "commentContent": "Hai Juga",
                "replies": [
                    {
                        "commentId": 121,
                        "commentContent": "Haai juga hai jugaa"
                    }
                ]
            }
        ]
    },
    {
        "commentId": 2,
        "commentContent": "Halooo"
    }
]

def count_total_comments(comment_list):
    total = 0
    for comment in comment_list:
        total += 1
        if "replies" in comment and comment["replies"]:
            total += count_total_comments(comment["replies"])
    return total

if __name__ == "__main__":
    total_comments = count_total_comments(comments)
    print(f"total komentar (termasuk replies): {total_comments}")