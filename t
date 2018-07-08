
# U=https://xxxxxx.execute-api.us-east-1.amazonaws.com/beta/dataTablePut
[ -z $U ] && echo must set U to url && exit 1

date "+%s  %Y:%m:%dT%H:%M:%S"

H="Content-type: application/json"

D=$(cat <<EOJSON
  { 
    "userSourceID": "ricSump2", 
    "dedDepth":"6"
  }
EOJSON
)


curl -H "${H}" -d "${D}" -X PUT ${U}
