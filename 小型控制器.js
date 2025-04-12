// @ts-nocheck
const METADATA = {
    website: "https://github.com/Helium-ion/Shapez-SmallController",
    author: "硝酸饮料",
    name: "小型控制器",
    version: "1.0",
    id: "小型控制器",
    description: "小型控制器。",
    minimumGameVersion: ">=1.5.0",
};

const pNG="data:image/png;base64,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";
const pNGm="data:image/png;base64,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";

const enumSmallControllerVariants = {
    mirrored: "mirrored",
};

const overlayMatrices = {
    [shapez.defaultBuildingVariant]: shapez.generateMatrixRotations([0, 1, 0, 1, 1, 0, 0, 1, 0]),
    [enumSmallControllerVariants.mirrored]: shapez.generateMatrixRotations([0, 1, 0, 0, 1, 1, 0, 1, 0]),
};

let codeToSignal,conditionControl;

class MetaSmallController extends shapez.MetaBuilding {
    constructor() {
        super("smallController");
    }

    static getAllVariantCombinations() {
        return [
            {
                variant: shapez.defaultBuildingVariant,
                name: "小型控制器",
                description: "使用此元件表示您接受可能发生的不可逆的存档毁坏",

                regularImageBase64: pNG,
                blueprintImageBase64: pNG,
                tutorialImageBase64: pNG,
            },
            {
                variant: enumSmallControllerVariants.mirrored,
                name: "小型控制器（镜像）",
                description: "使用此元件表示您接受可能发生的不可逆的存档毁坏",

                regularImageBase64: pNGm,
                blueprintImageBase64: pNGm,
                tutorialImageBase64: pNGm,
            },
        ];
    }

    getSilhouetteColor() {
        return "#000000";
    }

    /**
     * @param {GameRoot} root
     */
    getIsUnlocked(root) {
        return true;
    }

    /** @returns {"wires"} **/
    getLayer() {
        return "wires";
    }

    getDimensions() {
        return new shapez.Vector(1, 1);
    }

    getAvailableVariants() {
        return [shapez.defaultBuildingVariant, enumSmallControllerVariants.mirrored];
    }

    getSpecialOverlayRenderMatrix(rotation, rotationVariant, variant) {
        return overlayMatrices[variant][rotation];
    }

    getRenderPins() {
        // We already have it included
        return false;
    }

    /**
     *
     * @param {Entity} entity
     * @param {number} rotationVariant
     */
    updateVariants(entity, rotationVariant, variant) {
        entity.components.WiredPins.slots[1].direction =
            variant === enumSmallControllerVariants.mirrored ? shapez.enumDirection.right : shapez.enumDirection.left;
    }

    /**
     * Creates the entity at the given location
     * @param {Entity} entity
     */
    setupEntityComponents(entity) {
        entity.addComponent(
            new shapez.WiredPinsComponent({
                slots: [
                    {
                        pos: new shapez.Vector(0, 0),
                        direction: shapez.enumDirection.top,
                        type: shapez.enumPinSlotType.logicalEjector,
                    },
                    {
                        pos: new shapez.Vector(0, 0),
                        direction: shapez.enumDirection.left,
                        type: shapez.enumPinSlotType.logicalAcceptor,
                    },
                    {
                        pos: new shapez.Vector(0, 0),
                        direction: shapez.enumDirection.bottom,
                        type: shapez.enumPinSlotType.logicalAcceptor,
                    },
                ],
            })
        );

        entity.addComponent(
            new SmallControllerComponent({})
        );
    }
}

class SmallControllerComponent extends shapez.Component {
    static getId() {
        return "SmallController";
    }

    static getSchema() {
        // Here you define which properties should be saved to the savegame
        // and get automatically restored
        return {
            commandText: shapez.types.string,
            commandArray: shapez.types.array(shapez.types.array(shapez.types.string)),
        };
    }

    constructor() {
        super();
        this.commandText = "0";
        this.commandArray = [["0"]];
    }
}

class HUDSmallControllerEdit extends shapez.BaseHUDPart {
    initialize() {
        this.root.camera.downPreHandler.add(this.downPreHandler, this);

        codeToSignal = ((code,output,transmit) => {
            if(code === "output"){
                return output;
            }
            if(code === "transmit"){
                return transmit;
            }
            if(code === "null"){
                return null;
            }
            if(code === "rand"){
                return Math.random()<0.5?shapez.BOOL_FALSE_SINGLETON:shapez.BOOL_TRUE_SINGLETON;
            }
            if(code === "0"){
                return shapez.BOOL_FALSE_SINGLETON;
            }
            if(code === "1"){
                return shapez.BOOL_TRUE_SINGLETON;
            }
            if(shapez.enumColors[code]){
                return shapez.COLOR_ITEM_SINGLETONS[code];
            }
            if(shapez.ShapeDefinition.isValidShortKey(code)){
                return this.root.shapeDefinitionMgr.getShapeItemFromShortKey(code);
            }
            return null;
        });

        conditionControl = ((condition,output,transmit,control) => {
            if(condition == ""){
                return true;
            }
            if(condition === "true"){
                return shapez.isTruthyItem(control);
            }
            if(condition === "false"){
                return !shapez.isTruthyItem(control);
            }
            if(condition === "any"){
                return !(control===null);
            }
            return control==codeToSignal(condition,output,transmit);
        });
    }

    /**
     * @param {Vector} pos
     * @param {enumMouseButton} button
     */
    downPreHandler(pos, button) {
        if (this.root.currentLayer !== "wires") {
            return;
        }

        const tile = this.root.camera.screenToWorld(pos).toTileSpace();
        const contents = this.root.map.getLayerContentXY(tile.x, tile.y, "wires");
        if (contents) {
            const smallControllerComp = contents.components.SmallController;
            if (smallControllerComp) {
                if (button === shapez.enumMouseButton.left) {
                    this.editCommandText(contents, {
                        deleteOnCancel: false,
                    });
                    return shapez.STOP_PROPAGATION;
                }
            }
        }
    }

    /**
     * Asks the player to enter a notification text
     * @param {Entity} entity
     * @param {object} param0
     * @param {boolean=} param0.deleteOnCancel
     */
    editCommandText(entity, { deleteOnCancel = true }) {
        const smallControllerComp = entity.components.SmallController;
        if (!smallControllerComp) {
            return;
        }

        // save the uid because it could get stale
        const uid = entity.uid;

        // create an input field to query the text
        const textInput = new shapez.FormElementInput({
            id: "commandText",
            placeholder: "",
            defaultValue: smallControllerComp.commandArray[0][0]+smallControllerComp.commandText.slice(smallControllerComp.commandText.indexOf(';')),
            validator: val => val.length > 0,
        });

        // create the dialog & show it
        const dialog = new shapez.DialogWithForm({
            app: this.root.app,
            title: "小型控制器",
            desc: "即将执行的语句："+smallControllerComp.commandArray[Number(smallControllerComp.commandArray[0][0])].join(" goto "),
            formElements: [textInput],
            buttons: ["cancel:bad:escape", "ok:good:enter"],
            closeButton: false,
        });
        this.root.hud.parts.dialogs.internalShowDialog(dialog);

        // When confirmed, set the text
        dialog.buttonSignals.ok.add(() => {
            if (!this.root || !this.root.entityMgr) {
                // Game got stopped
                return;
            }

            const entityRef = this.root.entityMgr.findByUid(uid, false);
            if (!entityRef) {
                // outdated
                return;
            }

            const smallControllerComp = entityRef.components.SmallController;
            if (!smallControllerComp) {
                // no longer interesting
                return;
            }

            // set the text
            smallControllerComp.commandText = textInput.getValue();
            smallControllerComp.commandArray = smallControllerComp.commandText.replace(/\s+/g,"").split(";").map(subStr => subStr.split("goto"));
        });

        // When cancelled, destroy the entity again
        if (deleteOnCancel) {
            dialog.buttonSignals.cancel.add(() => {
                if (!this.root || !this.root.entityMgr) {
                    // Game got stopped
                    return;
                }

                const entityRef = this.root.entityMgr.findByUid(uid, false);
                if (!entityRef) {
                    // outdated
                    return;
                }

                const smallControllerComp = entityRef.components.SmallController;
                if (!smallControllerComp) {
                    // no longer interesting
                    return;
                }

                this.root.logic.tryDeleteBuilding(entityRef);
            });
        }
    }
}

class SmallControllerSystem extends shapez.GameSystemWithFilter {
    constructor(root) {
        // By specifying the list of components, `this.allEntities` will only
        // contain entities which have *all* of the specified components
        super(root, [SmallControllerComponent]);

        // Ask for a notification text once an entity is placed
        this.root.signals.entityManuallyPlaced.add(entity => {
            const editorHud = this.root.hud.parts.HUDSmallControllerEdit;
            if (editorHud) {
                editorHud.editCommandText(entity, { deleteOnCancel: true });
            }
        });
    }

    update() {
        if (!this.root.gameInitialized) {
            // Do not start updating before the wires network was
            // computed to avoid dispatching all notifications
            return;
        }

        // Go over all notification blocks and check if the signal changed
        for (let i = 0; i < this.allEntities.length; ++i) {
            const entity = this.allEntities[i];
            const commandArray = entity.components.SmallController.commandArray;

            let counter = Number(commandArray[0][0]);
            if(counter<=0){
                entity.components.WiredPins.slots[0].value = null;
                continue;
            }

            // Compute if the bottom pin currently has a truthy input
            const pinsComp = entity.components.WiredPins;
            const network0 = pinsComp.slots[0].linkedNetwork;
            const network1 = pinsComp.slots[1].linkedNetwork;
            const network2 = pinsComp.slots[2].linkedNetwork;
            let value0 = null;
            let value1 = null;
            let value2 = null;

            if (network0 && network0.hasValue()) {value0 = network0.currentValue;}
            if (network1 && network1.hasValue()) {value1 = network1.currentValue;}
            if (network2 && network2.hasValue()) {value2 = network2.currentValue;}

            let command = commandArray[counter];

            if(command.length>1) {
                const condition = command[0];
                if(conditionControl(condition,value0,value2,value1)){
                    counter = Number(command[1]) % commandArray.length;
                }else{
                    counter = (counter + 1)%commandArray.length;
                }
                if(counter <=0) {
                    pinsComp.slots[0].value = null;
                    entity.components.SmallController.commandArray[0][0]=counter.toString();
                    continue;
                }
                command = commandArray[counter];
                if(command.length>1) {
                    entity.components.SmallController.commandArray[0][0]=counter.toString();
                    continue;
                }
            }

            const code = command[0];
            if(code != ""){
                pinsComp.slots[0].value = codeToSignal(code,value0,value2);
            }
            entity.components.SmallController.commandArray[0][0]=((counter+1)%commandArray.length).toString();
        }
    }
}

class Mod extends shapez.Mod {
    init() {
        this.modInterface.registerComponent(SmallControllerComponent);
        // Register the new building
        this.modInterface.registerNewBuilding({
            metaClass: MetaSmallController,
            buildingIconBase64: pNG
        });

        // Add it to the regular toolbar
        this.modInterface.addNewBuildingToToolbar({
            toolbar: "wires",
            location: "primary",
            metaClass: MetaSmallController,
        });

        this.modInterface.registerGameSystem({
            id: "smallController",
            systemClass: SmallControllerSystem,
            before: "constantSignal",
        });

        this.modInterface.registerHudElement("HUDSmallControllerEdit", HUDSmallControllerEdit);
    }
}