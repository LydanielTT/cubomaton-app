import sys
import simplejson as json

sys.stdout.write(json.dumps([{"test":"test"}])'other')
sys.stdout.flush()
