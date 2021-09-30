/**
 * @ Author: Phhui
 * @ Create Time: 2021-09-30 10:27:56
 * @ Modified by: Phhui
 * @ Modified time: 2021-09-30 11:54:06
 * @ Description:
 */
import { _decorator, Component, Node, Prefab, CCObject, instantiate } from 'cc';
const { ccclass, property } = _decorator;
@ccclass('Main')
export class Main extends Component {
    @property(Node)
    private player:Node=null;
    @property(Prefab)
    private enemy:Prefab=null;

    private pool:Array<Node>=[];
    private poolDict:any={};
    private t:number=0;
    onLoad(){
        this.node.on(Node.EventType.TOUCH_START,this.touchStart,this);
    }
    start () {

    }
    touchStart(){
        
    }
    update(dt){
        this.t+=dt;
        if(this.t<2)return;
        this.t-=2;
        let nd:Node=this.NEW();
        nd.parent=this.node;
        
    }
    public NEW(){
        if(this.pool.length>0){
            let nd:Node=this.pool.shift();
            if(this.poolDict[nd.uuid]){
                this.poolDict[nd.uuid]=null;
                delete this.poolDict[nd.uuid];
            }
            return nd;
        }
        let nd:Node=instantiate(this.enemy);
        return nd;
    }
    public FREE(nd:Node){
        if(this.poolDict[nd.uuid])return;
        this.poolDict[nd.uuid]=1;
        this.pool.push(nd);
    }
}