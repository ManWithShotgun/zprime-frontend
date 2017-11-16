var fs          = require('fs');
var path        = require('path');
var util        = require('util');

var DATA_CAMERAS = path.join(__dirname, 'data', 'cameras.json');
var PER_PAGE      = 10;

class CamerasServ{

  DeleteCameraHandler(req, res){
    console.log('delete id: '+req.params.id);
    res.json({success: true});
  }

  CreateCameraHandler(req, res){
    console.log('Create JSON: '+req.body.json);
    console.log('file: '+req.body.file);
    res.json({success: true});
  }

  UpdateCameraHandler(req, res){
    console.log('Edit JSON: '+req.body.json);
    console.log('Id: '+req.params.id);
    console.log('file: '+req.body.file);
    res.json({success: true});
  }

  cameraHandler(req, res){
    var items      = JSON.parse(fs.readFileSync(DATA_CAMERAS));
    var id         = req.params.id;

    var item =items.find((item)=>{ return item.id==id});

    return res.json({product : item});
  }

  camerasHandler(req, res){
    console.log(req.query.offset);
    var items          = JSON.parse(fs.readFileSync(DATA_CAMERAS));
    var offset         = req.query.offset ? parseInt(req.query.offset, 10) : 0;
    var filter         = req.query.filter ? req.query.filter : undefined;
    var filterName     = req.query.filterName ? req.query.filterName : undefined;
    var nextOffset     = offset + PER_PAGE;
    var previousOffset = (offset - PER_PAGE < 1) ? 0 : offset - PER_PAGE;

    if(filter){
      items=items.filter((item)=>{ return item.MP==filter});
    }
    if(filterName){
      items=items.filter((item)=>{ return item.name.indexOf(filterName)>-1});
    }

    var meta = {
      limit       : PER_PAGE,
      next        : util.format('?limit=%s&offset=%s', PER_PAGE, nextOffset),
      offset      : req.query.offset,
      previous    : util.format('?limit=%s&offset=%s', PER_PAGE, previousOffset),
      total_count : items.length
    };

    var json = {
      meta     : meta,
      products : getPaginatedItems(items, offset)
    };


    // res.set('Access-Control-Allow-Origin', '*');

    return res.json(json);
  }
}

function getPaginatedItems(items, offset) {
  return items.slice(offset, offset + PER_PAGE);
}

module.exports=new CamerasServ();
